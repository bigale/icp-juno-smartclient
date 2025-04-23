import React from 'react'
import CRUDGrid from './CRUDGrid'

describe('<CRUDGrid />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CRUDGrid />)
  })
})