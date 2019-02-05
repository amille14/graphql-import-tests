const { importSchema } = require('graphql-import')

describe('example 1 - Importing specific types', () => {
  it('should import the specified type', () => {
    const expected = `type A {
  something: String
}
`

    const schema = importSchema('./fixtures/example1/index.graphql')
    expect(schema).toEqual(expected)
  })
})

describe('example 2 - Importing specific types with dependencies', () => {
  it('should import the specified type and its dependencies', () => {
    const expected = `type A {
  something: String
  b: B
}

type B {
  something: String
}
`

    const schema = importSchema('./fixtures/example2/index.graphql')
    expect(schema).toEqual(expected)
  })
})

describe('example 3 - Importing specific types from multiple files with overlapping type names', () => {
  it('should only import the specified types from the specified files', () => {
    const expected = `type A {
  b: B
  correct: String
}

type B {
  a: A
  c: C
  correct: String
}

type C {
  correct: String
}
`

    const schema = importSchema('./fixtures/example3/index.graphql')
    expect(schema).toEqual(expected)
  })
})

describe('example 4 - Importing Query.*', () => {
  it('should import the Query type and all of its dependencies', () => {
    const expected = `type Query {
  getA: A!
}

type A {
  b: B
}

type B {
  something: String
}
`

    const schema = importSchema('./fixtures/example4/index.graphql')
    expect(schema).toEqual(expected)
  })
})
