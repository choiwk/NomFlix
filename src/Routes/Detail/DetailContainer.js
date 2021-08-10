import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null, // id를 갖고 얻게 되는 모든 것들, moive, TV 등 그것들은 result를 갖게 된다.
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'), // 경로가 / http://localhost:3000/movie/ 인지
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push }, // history 에는 push 라는 정보가 존재한다.
    } = this.props;

    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push('/'); // 숫자가 아닐 경우 주소는 '/' 인 홈으로 돌아가도록 한다.
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: 'Cannot Find Anything' });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
