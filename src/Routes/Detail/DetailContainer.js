import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  state = {
    result: null, // id를 갖고 얻게 되는 모든 것들, moive, TV 등 그것들은 result를 갖게 된다.
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = parseInt(id);
    console.log(parseInt(id));
    if (isNaN(parseId)) {
      return push('/');
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.props);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
