import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class {{service_name|title|replace("-", "")}}ServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


  }
}
