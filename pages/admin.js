import React from 'react'
import Head from 'next/head'

const Admin = (props) => {
  return (
    <>
      <div className="admin-container">
        <Head>
          <title>admin - tm-portfolio-23</title>
          <meta name="description" content="The portfolio of Theo Middleton" />
          <meta property="og:title" content="admin - tm-portfolio-23" />
          <meta
            property="og:description"
            content="The portfolio of Theo Middleton"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/be0159a4-e9c0-4262-a216-6ff2d97f9079/ee3e45c0-dac2-4ceb-b9ee-4cca3d12dafd?org_if_sml=1"
          />
        </Head>
        <h1>Upload</h1>
        <div className="admin-container1"></div>
        <div className="admin-container2">
          <button type="submit" className="admin-button button">
            Upload
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .admin-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .admin-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .admin-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .admin-button {
            top: 0px;
            left: 0px;
            right: 0px;
            width: var(--dl-size-size-medium);
            margin: auto;
            position: absolute;
            transition: 0.3s;
          }
          .admin-button:hover {
            fill: var(--dl-color-success-700);
          }
          .admin-button:active {
            color: var(--dl-color-primary-500);
          }
        `}
      </style>
    </>
  )
}

export default Admin
