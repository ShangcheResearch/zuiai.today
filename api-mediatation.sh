openapi-generator  generate \
      -i http://localhost:8080/docs/docs.yaml \
       -g typescript \
       --additional-properties=stringEnums=false \
       --additional-properties=npmName=@app/yueleme-api  \
       --additional-properties=npmVersion=0.0.1 \
       --additional-properties=useObjectParameters=true  --additional-properties=prependFormOrBodyParameters=true -o packages/yueleme-api
