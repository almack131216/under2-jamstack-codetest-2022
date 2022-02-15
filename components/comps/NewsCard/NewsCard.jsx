import React from "react"
import PropTypes from "prop-types"
import { Card } from "../../atoms/Card"
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

NewsCard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function NewsCard({ className = "", article}) {

    const {format} = require('date-fns');
    const {_id: id, heading, publishDate, coverImage: src} = article

    const formatDate = (getDate) => {
        const dateStr = '20' + getDate
        const date = format(new Date('20' + getDate), 'EE d MMM yyyy')
        const dateString = format(new Date(), 'EE d MMM yyyy') === date ? 'TODAY' : date
        return dateString
    }

    return (
        <Card className={`p-3 md:p-8 items-center justify-center w-full ${className}`}>
            <a href="#">
                <img src={src} alt={heading} className="h-2/3 w-2/3 object-contain" />
            </a>
            
            <h3>{formatDate(publishDate)}</h3>
            <strong>{heading}</strong>
        </Card>
    )
}
