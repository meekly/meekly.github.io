<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Lab for XSL
        </title>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </head>
      <body>
          <xsl:for-each select="строка">
            <mjx-math>

            </mjx-math>
          </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
