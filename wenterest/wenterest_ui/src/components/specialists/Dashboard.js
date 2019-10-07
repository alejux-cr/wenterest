import React, { Fragment } from 'react'
import Form from './Form'
import Specialists from './Specialists'
import Specialist from './Specialist'

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Specialists/>
        </Fragment>
    )
}
