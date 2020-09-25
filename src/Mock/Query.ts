export default {
  "type": "bridge",
  "jobs": [
    {
      "type": "pipeline",
      "jobs": [
        {
          "type": "task",
          "payload": "some payload"
        },
        {
          "type": "task",
          "payload": "some payload"
        },
        {
          "type": "task",
          "payload": "some payload"
        },
        {
          "type": "task",
          "payload": "some payload"
        }
      ]
    },
    {
      "type": "pipeline",
      "jobs": [
        {
          "type": "task",
          "payload": "some payload"
        },
        {
          "type": "task",
          "payload": "some payload"
        }
      ]
    },
    {
      "type": "task",
      "payload": "some payload"
    },
    {
      "type": "task",
      "payload": "some payload"
    }
  ]
}
