#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';
import { nextJsExport } from '../lib/process/setup';

nextJsExport();

const app = new cdk.App();
new InfraStack(app, 'next-html-import-example-stack', {
  name: 'next-html-import-example',
  region: 'us-west-2'
});