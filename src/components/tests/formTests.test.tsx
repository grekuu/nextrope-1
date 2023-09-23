import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import FormInputs from '../Form/FormInputs'

describe('FormInputs component', () => {
    afterEach(() => {
        cleanup()
    })

    it('Should render the component without errors', () => {
        render(
            <Provider store={store}>
                <FormInputs />
            </Provider>
        )

        // Assert that the component renders without errors
        const workDescriptionLabel = screen.getByText('Work Description')
        expect(workDescriptionLabel).not.toBeNull()

        // You can add more assertions as needed to check other elements and behaviors.
    })

    it('Should allow entering a description', () => {
        render(
            <Provider store={store}>
                <FormInputs />
            </Provider>
        )

        // Get the description input field
        const descriptionInput = screen.getByPlaceholderText('FormInputs component') as HTMLInputElement

        // Simulate user input in the description field
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } })

        // Assert that the input field contains the entered text
        expect(descriptionInput.value).toBe('Test Description')
    })
})
