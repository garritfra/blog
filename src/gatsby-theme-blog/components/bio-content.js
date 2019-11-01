import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal Blog by{" "}
    <Styled.a href="https://linkedin.com/in/garrit-franke-0558b1172">
      Garrit Franke
    </Styled.a>
    .<br />I like coding as much as I do porridge.
  </Fragment>
)
