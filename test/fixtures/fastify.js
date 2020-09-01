module.exports = [{
  url: '/pets',
  method: 'GET',
  schema: {
    params: undefined,
    query: {
      type: 'object',
      required: [],
      properties: {
        limit: {
          type: 'integer',
          format: 'int32'
        }
      }
    },
    response: {
      200: {
        $ref: '#/components/schemas/Pets'
      }
    }
  },
  handler: Function
},
{
  url: '/pets',
  method: 'POST',
  schema: {
    params: undefined,
    query: undefined,
    headers: {
      type: 'object',
      required: ['content-type'],
      properties: {
        'content-type': {
          const: 'x-www-form-urlencoded'
        }
      }
    },
    body: {
      type: 'object',
      required: ['email', 'username', 'password'],
      properties: {
        email: {
          type: 'string',
          format: 'email'
        },
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        }
      }
    },
    response: {}
  },
  handler: Function
},
{
  url: '/pets/:petId',
  method: 'GET',
  schema: {
    query: undefined,
    params: {
      type: 'object',
      required: ['petId'],
      properties: {
        petId: {
          type: 'string'
        }
      }
    },
    response: {
      200: {
        $ref: '#/components/schemas/Pet'
      }
    }
  },
  handler: Function
}]
