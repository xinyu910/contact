import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import styled from "styled-components"
import React from 'react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vmin;
`

export const AvatarC = ({ letter, color, width, height, fontSize}) => {
    return (
        <Container>
            <Avatar 
                sx = {{bgcolor: color, width: width, height: height, fontSize: fontSize}}
            >{letter}</Avatar>
        </Container>
    )
}

AvatarC.propTypes = {
    letter: PropTypes.string,
    color: PropTypes.string,
}

AvatarC.defaultProps = {
    width: '100',
    height: '100'
}