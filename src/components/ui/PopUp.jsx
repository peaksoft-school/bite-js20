import { FormControl, MenuItem, Select as MuiSelect } from '@mui/material'
import { forwardRef, useState } from 'react'
import { ArrowDownIcon } from '../../assets/icons'

export const PopUp = forwardRef((props, ref) => {
  const { value, onChange, options, label = 'Сортировка по' } = props

  const [selected, setSelected] = useState(value || '')

  const handleChange = (e) => {
    setSelected(e.target.value)

    if (onChange) onChange(e.target.value)
  }

  const handleRenderValue = (val) => {
    if (!val) return label

    const found = options.find((o) => o.value === val)

    return found ? found.label : label
  }

  return (
    <FormControl variant="standard" size="small">
      <MuiSelect
        ref={ref}
        id="sort-select"
        value={selected}
        onChange={handleChange}
        IconComponent={() => <img src={ArrowDownIcon} alt="arrow" width={18} height={18} />}
        renderValue={handleRenderValue}
        disableUnderline
        displayEmpty
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
})
