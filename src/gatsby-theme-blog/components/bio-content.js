import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal Blog by{" "}
    <Styled.a href="https://garrit.xyz">Garrit Franke</Styled.a>
    .<br />I like coding as much as I do porridge.
  </Fragment>
)
