import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  keywords,
  image,
  synonyms,
  titleTemplate,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultImage, url, defaultTitle },
      },
      sitePage: { path },
      sanitySiteSettings: { siteTitle },
    }) => {
      //synonyms
      const syno = synonyms || [];
      const synkey = syno.map((syn) => syn);

      const seo = {
        defaultTitle: siteTitle,
        description: description || "",
        image: `${image ? image : image || url + defaultImage}`,
        keywords: `${
          keywords ? keywords + ", " + synkey : keywords + ", " + synkey
        }`,
      };

      const defaultTemplate = titleTemplate
        ? titleTemplate
        : `%s | ${defaultTitle}`;

      return (
        <Helmet title={title} titleTemplate={defaultTemplate}>
          <html lang="en" />
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:site" content="@patricialopes" />
          <meta name="twitter:creator" content="@patricialopes"></meta> */}
          <script>{`LUX=(function(){var a=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMarks)?LUX.gaMarks:[]);var d=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMeasures)?LUX.gaMeasures:[]);var j="LUX_start";var k=window.performance;var l=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns:(Date.now?Date.now():+(new Date())));if(k&&k.timing&&k.timing.navigationStart){l=k.timing.navigationStart}function f(){if(k&&k.now){return k.now()}var o=Date.now?Date.now():+(new Date());return o-l}function b(n){if(k){if(k.mark){return k.mark(n)}else{if(k.webkitMark){return k.webkitMark(n)}}}a.push({name:n,entryType:"mark",startTime:f(),duration:0});return}function m(p,t,n){if("undefined"===typeof(t)&&h(j)){t=j}if(k){if(k.measure){if(t){if(n){return k.measure(p,t,n)}else{return k.measure(p,t)}}else{return k.measure(p)}}else{if(k.webkitMeasure){return k.webkitMeasure(p,t,n)}}}var r=0,o=f();if(t){var s=h(t);if(s){r=s.startTime}else{if(k&&k.timing&&k.timing[t]){r=k.timing[t]-k.timing.navigationStart}else{return}}}if(n){var q=h(n);if(q){o=q.startTime}else{if(k&&k.timing&&k.timing[n]){o=k.timing[n]-k.timing.navigationStart}else{return}}}d.push({name:p,entryType:"measure",startTime:r,duration:(o-r)});return}function h(n){return c(n,g())}function c(p,o){for(i=o.length-1;i>=0;i--){var n=o[i];if(p===n.name){return n}}return undefined}function g(){if(k){if(k.getEntriesByType){return k.getEntriesByType("mark")}else{if(k.webkitGetEntriesByType){return k.webkitGetEntriesByType("mark")}}}return a}return{mark:b,measure:m,gaMarks:a,gaMeasures:d}})();LUX.ns=(Date.now?Date.now():+(new Date()));LUX.ac=[];LUX.cmd=function(a){LUX.ac.push(a)};LUX.init=function(){LUX.cmd(["init"])};LUX.send=function(){LUX.cmd(["send"])};LUX.addData=function(a,b){LUX.cmd(["addData",a,b])};LUX_ae=[];window.addEventListener("error",function(a){LUX_ae.push(a)});LUX_al=[];if("function"===typeof(PerformanceObserver)&&"function"===typeof(PerformanceLongTaskTiming)){var LongTaskObserver=new PerformanceObserver(function(c){var b=c.getEntries();for(var a=0;a<b.length;a++){var d=b[a];LUX_al.push(d)}});try{LongTaskObserver.observe({type:["longtask"]})}catch(e){};`}</script>
          <script src="https://cdn.speedcurve.com/js/lux.js?id=599278489" async defer crossorigin="anonymous"></script>
          <script type="application/ld+json">
            {`[{
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Patricia Lopes",
              "alternateName": "Patrícia Lopes",
              "description": "Award winning Patricia Lopes is a Portuguese-Brazilian director of photography/cinematographer, who is especially drawn by stories that challenge her to think outside of the box. She has lived abroad since her childhood, giving her the ability to adapt and explore her style to each project solely.",
              "url": "https://www.patricialopes.be",
              "image":
                "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=1200&fm=jpg&q=100",
              "sameAs": [
                "https://www.facebook.com/patricia.lopes.7127",
                "https://www.instagram.com/patricialopes.dop",
                "https://vimeo.com/patricialopes",
                "https://www.linkedin.com/in/patricialopes-dop",
                "https://www.imdb.com/name/nm7859516"],
              "jobTitle": "Director of Photography"
            },
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Patricia Lopes",
              "url": "https://www.patricialopes.be/",
              "description": "Award winning Patricia Lopes is a Portuguese-Brazilian director of photography/cinematographer, who is especially drawn by stories that challenge her to think outside of the box. She has lived abroad since her childhood, giving her the ability to adapt and explore her style to each project solely.",
              "image":
                "https://cdn.sanity.io/images/l2xxtj60/production/d4a6a82b8c75f40cc2e1edee477dae1756fb6a93-4096x2730.jpg?w=1200&h=1200&fm=jpg&q=100",
              "sameAs": [
                  "https://www.facebook.com/patricia.lopes.7127",
                  "https://www.instagram.com/patricialopes.dop",
                  "https://vimeo.com/patricialopes",
                  "https://www.linkedin.com/in/patricialopes-dop",
                  "https://www.imdb.com/name/nm7859516"]
            }]`}
          </script>
        </Helmet>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultImage: image
        url
      }
    }
    sitePage {
      path
    }
    sanitySiteSettings {
      siteTitle: title
    }
  }
`;
