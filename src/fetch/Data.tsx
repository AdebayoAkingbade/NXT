
    /* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import useQuery from '../hooks/useQuery';
import Table from "../Table/DataTable"

const Data = () => {
  const [isList, setIsList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({});
  const { query, setQuery } = useQuery()

  useEffect(() => {
    setLoading(true)
    axios.get(`https://swapi.dev/api/planets/?page=${query.page || 1}`).then(response => {
        console.log(response.data)
        setIsList(response.data.results)
        setLoading(false)
    }).catch(error => {
        setError(error);
        setLoading(false)
    })
  }, [query.page]);

  return (
    <div>
      <Table data={isList} query={query} setQuery={setQuery} loading={loading}/>
    </div>
  );
};
export default Data;
