import lambda from 'aws-lambda'
import awsServerlessExpress from 'aws-serverless-express'
import app from '@/server/app'
import binaryMimeTypes from '@/server/binaryMimeTypes'

const server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes)

module.exports.render = (
  event: lambda.APIGatewayEvent,
  context: lambda.Context
) => {
  awsServerlessExpress.proxy(server, event, context)
}
