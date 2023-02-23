import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import { CssBaseline, Typography } from "@mui/material";

function TransactionsPage() {
  return (
    <Fragment>
      <Head>
        <title>TransactionsPage</title>
        <meta name="description" content="list of transactions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Typography variant="h6">TransactionsPage</Typography>
    </Fragment>
  );
}

export default TransactionsPage;
