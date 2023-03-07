//@ts-check

"use client"

type Props = {
    value: string
}

export default function DynamicClient({value}: Props) {
  return (
    <div>{value}</div>
  )
}