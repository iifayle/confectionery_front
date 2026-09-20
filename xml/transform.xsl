<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <xsl:for-each select="catalog/row">
    <div class="string-cataloge">
        <xsl:for-each select="product">
        <div class="cataloge">
            <div class="name"><xsl:value-of select="name"/></div>
            <div class="back2"></div>
            <div class="imgcataloge">
                <img src="{image}" alt="{alt}" class="img4"/>
            </div>
            <div class="price"><xsl:value-of select="price"/></div>
            <div class="buttoncatalogecarzin">
                <button class="butcarzin">В корзину</button>
            </div>
        </div>
        </xsl:for-each>
    </div>
    </xsl:for-each>
</xsl:template>
</xsl:stylesheet>
