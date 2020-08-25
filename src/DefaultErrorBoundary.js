import React from 'react'

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false,
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    // eslint-disable-next-line react/prop-types
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }
}

export default DefaultErrorBoundary
