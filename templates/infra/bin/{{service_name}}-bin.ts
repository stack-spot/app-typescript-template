#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { {{service_name|title|replace("-", "")}}ServiceStack } from '../lib/{{service_name}}-service-stack';

const app = new cdk.App();
new {{service_name|title|replace("-", "")}}ServiceStack(app, '{{service_name|title|replace("-", "")}}ServiceStack');
