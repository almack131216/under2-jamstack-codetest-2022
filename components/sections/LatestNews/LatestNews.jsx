import React from "react"
import PropTypes from "prop-types"
import { Container } from "../../atoms/Container"
import { Heading } from "../../atoms/Heading"
import { NewsCard } from "../../comps/NewsCard"
import { TextLink } from "../../atoms/TextLink"

LatestNews.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export function LatestNews({ className = "", articles }) {
    
    return (
        <section className={`${className}`}>
            <Container>
                <div className="col-span-full">
                    <Heading className="">The latest from Mula</Heading>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 my-8 md:my-16">
                        {articles.map(article => <NewsCard
                            key={article._id}
                            article={article}
                        />)}
                    </div>
                </div>
            </Container>
        </section>
    )
}
