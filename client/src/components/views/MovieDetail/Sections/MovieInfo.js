import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    const { movie } = props;
    
    return (
        <Descriptions title="영화정보" bordered>
        <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="등록날짜">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="수익">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="상영시간">{movie.runtime}분</Descriptions.Item>
        <Descriptions.Item label="평점평균" span={2}>
        {movie.vote_average}점
        </Descriptions.Item>
        <Descriptions.Item label="평점갯수">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="개봉상태">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
      </Descriptions>
    )
}

export default MovieInfo
