import { useState, useRef, useEffect, type ChangeEvent } from 'react'
import './AddressLookup.css'

interface Props {
  id: string
  name: string
  label: string
  placeholder?: string
}

interface PostcodeResult {
  postcode: string
  ward: string
  district: string
  region: string
}

export default function AddressLookup({ id, name, label, placeholder }: Props) {
  const [postcodeQuery, setPostcodeQuery] = useState('')
  const [postcodeSuggestions, setPostcodeSuggestions] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState<PostcodeResult | null>(null)
  const [streetAddress, setStreetAddress] = useState('')
  const wrapRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Full address for form submission
  const fullAddress = confirmed
    ? `${streetAddress ? streetAddress + ', ' : ''}${confirmed.ward}, ${confirmed.district}, ${confirmed.postcode}`
    : ''

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  async function autocompletePostcode(partial: string): Promise<string[]> {
    try {
      const cleaned = partial.replace(/\s+/g, '').toUpperCase()
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(cleaned)}/autocomplete`)
      const data = await res.json()
      if (data.status === 200 && Array.isArray(data.result)) {
        return data.result.slice(0, 8)
      }
      return []
    } catch {
      return []
    }
  }

  async function validatePostcode(postcode: string): Promise<PostcodeResult | null> {
    try {
      const cleaned = postcode.replace(/\s+/g, '').toUpperCase()
      const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(cleaned)}`)
      const data = await res.json()
      if (data.status === 200 && data.result) {
        return {
          postcode: data.result.postcode,
          ward: data.result.admin_ward || '',
          district: data.result.admin_district || '',
          region: data.result.region || '',
        }
      }
      return null
    } catch {
      return null
    }
  }

  function handlePostcodeChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setPostcodeQuery(val)
    setConfirmed(null)
    setStreetAddress('')

    if (debounceRef.current) clearTimeout(debounceRef.current)

    const cleaned = val.replace(/\s+/g, '')
    if (cleaned.length >= 2) {
      setLoading(true)
      setShowDropdown(true)
      debounceRef.current = setTimeout(async () => {
        const results = await autocompletePostcode(val)
        setPostcodeSuggestions(results)
        setLoading(false)
      }, 300)
    } else {
      setPostcodeSuggestions([])
      setShowDropdown(false)
      setLoading(false)
    }
  }

  async function selectPostcode(pc: string) {
    setPostcodeQuery(pc)
    setShowDropdown(false)
    setLoading(true)
    const result = await validatePostcode(pc)
    if (result) {
      setConfirmed(result)
    }
    setLoading(false)
  }

  function handleReset() {
    setPostcodeQuery('')
    setConfirmed(null)
    setStreetAddress('')
    setPostcodeSuggestions([])
    setShowDropdown(false)
  }

  return (
    <div className="address-lookup" ref={wrapRef}>
      <label className="address-lookup__label">{label}</label>

      {!confirmed ? (
        <div className="address-lookup__postcode-wrap">
          <input
            type="text"
            id={id}
            placeholder={placeholder || 'Enter postcode e.g. BR3 1SQ'}
            value={postcodeQuery}
            onChange={handlePostcodeChange}
            onFocus={() => postcodeSuggestions.length > 0 && setShowDropdown(true)}
            autoComplete="off"
            className="address-lookup__input"
          />
          {loading && !showDropdown && (
            <span className="address-lookup__spinner" />
          )}
          {showDropdown && (
            <div className="address-dropdown">
              {loading ? (
                <div className="address-dropdown__loading">
                  <span className="address-dropdown__spinner-inline" />
                  Searching postcodes...
                </div>
              ) : postcodeSuggestions.length > 0 ? (
                <ul className="address-dropdown__list">
                  {postcodeSuggestions.map((pc) => (
                    <li key={pc}>
                      <button
                        type="button"
                        className="address-dropdown__item"
                        onClick={() => selectPostcode(pc)}
                      >
                        <strong>{pc}</strong>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="address-dropdown__loading">No postcodes found</div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="address-lookup__confirmed">
          <div className="address-lookup__confirmed-header">
            <div className="address-lookup__confirmed-postcode">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{confirmed.postcode}</span>
              <span className="address-lookup__confirmed-area">{confirmed.ward}, {confirmed.district}</span>
            </div>
            <button type="button" className="address-lookup__change-btn" onClick={handleReset}>
              Change
            </button>
          </div>
          <input
            type="text"
            placeholder="House number and street name"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="address-lookup__input address-lookup__street-input"
            autoFocus
          />
        </div>
      )}

      <input type="hidden" name={name} value={fullAddress} />
    </div>
  )
}
