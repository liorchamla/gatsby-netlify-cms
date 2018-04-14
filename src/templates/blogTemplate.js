import React from "react";
import showdown from "showdown";

export function BlogTemplate({
    title, date, sections, html // this prop will be injected by the GraphQL query below.
}) {
    const converter = new showdown.Converter();
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{title}</h1>
                <h2>{date}</h2>
                {sections.map((section, key) => (
                    <section key={key}>
                        <h2>{section.heading}</h2>
                        <img src={section.background} />
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(section.content) }} />
                    </section>
                ))}
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    );
}

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark
    const { title, date, sections } = data.markdownRemark.frontmatter;
    console.log(title, date, sections);
    return (
        <BlogTemplate
            title={title}
            date={date}
            sections={sections || []}
            html={html}
        />
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;