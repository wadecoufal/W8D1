import React from 'react';
import BenchMap from '../bench/bench_map';
import BenchIndex from '../bench/bench_index';

const Search = ({fetchBenches, benches}) => (
  <div>
    <BenchMap benches={benches}/>
    <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
  </div>
)

export default Search;
