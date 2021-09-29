import { useQuery } from "@apollo/client";
import React from "react";
import gql from "graphql-tag";

//expecting query at runtime by apollo
const APOLLo_QUERY = gql`
  {
    message
  }
`;

const Index = () => {
  const { loading, data, error } = useQuery(APOLLo_QUERY);

  return (
    <div>
      <h1>
        Data Received from APOLLO Client at Runtime from Serverless Function
      </h1>
      {loading && <p>Loading Client Side Query</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.message && <div>{data.message}</div>}
    </div>
  );
};

export default Index;
