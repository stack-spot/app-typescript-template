import * as cdk from "@aws-cdk/core";

export class {{service_name|title|replace("-", "")}}ServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


  }
}
