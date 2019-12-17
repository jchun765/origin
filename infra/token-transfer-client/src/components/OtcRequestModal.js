import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactGA from 'react-ga'

import { formInput, formFeedback } from '@/utils/formHelpers'
import { submitOtcRequest } from '@/actions/otc'
import {
  getError as getOtcError,
  getIsAdding as getOtcIsAdding
} from '@/reducers/otc'
import Modal from '@/components/Modal'
import SuccessIcon from '@/assets/success-icon.svg'

class OtcRequestModal extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    const initialState = {
      amount: '',
      amountError: null,
      modalState: 'Form',
      action: 'Buy'
    }
    return initialState
  }

  componentDidMount() {
    ReactGA.modalview(`/otcRequest`)
  }

  handleServerError(error) {
    if (error && error.status === 422) {
      // Parse validation errors from API
      if (error.response.body && error.response.body.errors) {
        error.response.body.errors.forEach(e => {
          this.setState({ [`${e.param}Error`]: e.msg })
        })
      } else {
        console.error(error.response.body)
      }
    }
  }

  handleFormSubmit = async event => {
    event.preventDefault()

    try {
      await this.props.submitOtcRequest({
        amount: this.state.amount,
        action: this.state.action
      })
    } catch (error) {
      // Error will be displayed in form, don't continue to two factor input
      return
    }
    this.setState({ modalState: 'Thanks' })
  }

  handleRadioClick = action => {
    this.setState({ action })
  }

  handleModalClose = () => {
    // Reset the state of the modal back to defaults
    this.setState(this.getInitialState())
    if (this.props.onModalClose) {
      this.props.onModalClose()
    }
  }

  render() {
    return (
      <Modal appendToId="main" onClose={this.handleModalClose} closeBtn={true}>
        {this.state.modalState === 'Form' && this.renderForm()}
        {this.state.modalState === 'Thanks' && this.renderThanks()}
      </Modal>
    )
  }

  renderForm() {
    const input = formInput(this.state, state => this.setState(state))
    const Feedback = formFeedback(this.state)

    return (
      <>
        <h1 className="mb-2">Create OTC Request</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                className={`btn btn-lg ${
                  this.state.action === 'Buy'
                    ? 'btn-outline-secondary'
                    : 'btn-secondary'
                }`}
              >
                <input
                  type="radio"
                  onClick={() => this.handleRadioClick('Buy')}
                />{' '}
                Buy
              </label>
              <label
                className={`btn btn-lg ${
                  this.state.action === 'Sell'
                    ? 'btn-outline-secondary'
                    : 'btn-secondary'
                }`}
              >
                <input
                  type="radio"
                  autoComplete="off"
                  onClick={() => this.handleRadioClick('Sell')}
                />{' '}
                Sell
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount of Tokens</label>
            <div className="input-group">
              <input {...input('amount')} type="number" />
              <div className="input-group-append">
                <span className="badge badge-secondary">OGN</span>
              </div>
            </div>
            <div className={this.state.amountError ? 'input-group-fix' : ''}>
              {Feedback('amount')}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-5"
            disabled={this.props.otcIsAdding}
          >
            {this.props.otcIsAdding ? (
              <>
                <span className="spinner-grow spinner-grow-sm"></span>
                Loading...
              </>
            ) : (
              <span>Submit Request</span>
            )}
          </button>
        </form>
      </>
    )
  }

  renderThanks() {
    return (
      <>
        <div className="my-3">
          <img src={SuccessIcon} />
        </div>
        <h1 className="mb-2">Thank you!</h1>
        <p>Our OTC partner will be in touch.</p>
        <button
          className="btn btn-primary btn-lg mt-5"
          onClick={this.props.onModalClose}
        >
          Done
        </button>
      </>
    )
  }
}

const mapStateToProps = ({ otc }) => {
  return {
    otcError: getOtcError(otc),
    otcIsAdding: getOtcIsAdding(otc)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitOtcRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(OtcRequestModal)