import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends Component {
  
  handleFetchBitcoin = async () => {
    await this.props.fetchBitcoin();
  };

  componentDidMount() {
    this.handleFetchBitcoin().then(() => {
      this.computeBitcoin();
    });
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin)?.length === 0) return "";
    let finalResult =
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);

    return finalResult;
  };

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bitcoin: state.bitcoin,
    balance: state.balance
  };
};

const mapDispatchToProps = {
  fetchBitcoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
