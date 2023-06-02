FROM golang:1.20-buster

WORKDIR /

COPY . .
RUN go mod download

RUN go build -o /mongo-with-golang

EXPOSE 8080

CMD [ "/mongo-with-golang" ]