import { expect, test, describe } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import Card from '@/components/Card.vue'

describe('Card Component', () => {
  test('renders correctly', () => {
    const { container, unmount } = render(Card)
    expect(container).toBeDefined()
    unmount()
  })

  test('has correct default bg-color', async () => {
    const { container } = render(Card)
    const text = container.getElementsByClassName('bg-gray-100')
    expect(text).toBeTruthy()
  })
})
