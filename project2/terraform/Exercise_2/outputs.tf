output "arn" {
  description = "Identifying the lambda function name."
  value       = aws_lambda_function.greet_lambda.arn
}
