import React from 'react'
import PropTypes from 'prop-types'
import { BlogTemplate } from '../../templates/blogTemplate'

const BlogPostPreview = ({ entry, widgetFor }) => {
    const entrySections = entry.getIn(['data', 'sections'])
    const sections = entrySections ? entrySections.toJS() : []
    return (
        <BlogTemplate
            title={entry.getIn(['data', 'title'])}
            date={entry.getIn(['data', 'date'])}
            sections={sections}
        />
    )
}

BlogPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default BlogPostPreview