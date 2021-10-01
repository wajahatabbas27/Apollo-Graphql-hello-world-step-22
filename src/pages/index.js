import { useQuery } from "@apollo/client";
import React from "react";
import gql from "graphql-tag";

// This query is executed at run time by Apollo.
const APOLLo_QUERY = gql`
  {
    message
    user {
      name
      age
    }
  }
`;

const Index = () => {
  const { loading, data, error } = useQuery(APOLLo_QUERY);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>
        Data Received from APOLLO Client at Runtime from Serverless Function
      </h1>
      {loading && <p>Loading Client Side Query</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.message && <div>{data.message}</div>}
      <br />
      <hr />
      <br />
      {data && data.user && (
        <div>
          <div>{data.user.name}</div>
          <div>{data.user.age}</div>
        </div>
      )}
    </div>
  );
};

export default Index;
