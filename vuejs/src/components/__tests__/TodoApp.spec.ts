import { render, fireEvent } from '@testing-library/vue'
import TodoApp from '../TodoApp.vue'

test('adds and removes todos', async () => {
  const { getByLabelText, getByText, queryByText } = render(TodoApp)

  const input = getByLabelText('Add a todo') as HTMLInputElement
  await fireEvent.update(input, 'Write tests')
  await fireEvent.keyUp(input, { key: 'Enter' })

  getByText('Write tests')

  const deleteBtn = getByText((_, node) => node?.textContent === 'delete' || false)
  // fallback: remove via button click on first delete icon
  const delIcons = document.querySelectorAll('button')
  if (delIcons.length) await fireEvent.click(delIcons[delIcons.length - 1])

  // after deletion the text should be gone
  expect(queryByText('Write tests')).toBeNull()
})
