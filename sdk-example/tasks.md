- Reviews'da DateTime var, SDK ile review olusturmayi dene ve ayni hatayi alip almadigini kontrol et
  - hata aliniyorsa: ticket
  - hata alinmiyorsa: ??







- Get the reviews service edmx
`cds ../cloud-cap-samples/bookshop/srv/admin-service.cds -2 edmx > ./resources/bookshop.edmx`
`cds ../cloud-cap-samples/reviews/srv/reviews-service.cds -2 edmx > ./resources/reviews.edmx`
- Generate the odata client
`generate-odata-client --input resources/ --outputDir src/odata-clients/ --overwrite --clearOutputDir --optionsPerService resources/service-mapping.json`
