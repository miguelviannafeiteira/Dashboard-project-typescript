/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tempos from './Tempos'
import { debug } from 'console'

const time = {
  title: 'Work',
  timeframes: {
    daily: {
      current: 5,
      previous: 7
    },
    weekly: {
      current: 32,
      previous: 36
    },
    monthly: {
      current: 190,
      previous: 128
    }
  }
}
describe('Form Component', () => {
  it('should start with null', () => {
    const { queryByText } = render(<Tempos tempo={'daily'}/>)
    expect(queryByText(time.timeframes.daily.current && time.timeframes.daily.current)).not.toBeInTheDocument()
  })

  it('should have the title Work', () => {
    const { findByText } = render(<Tempos tempo={''}/>)
  })

  it('should starts with daily', () => {
    const { getByText } = render(<Tempos tempo={'daily'}/>)
  })
})
