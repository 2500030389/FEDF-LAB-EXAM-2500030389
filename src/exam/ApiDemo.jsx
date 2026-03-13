import React, { useEffect, useState } from "react"
import axios from "axios"

function ApiDemo() {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    axios.get("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => {

        setPosts(response.data)

      })
      .catch((error) => {

        console.log(error)

      })

  }, [])

  return (

    <div>

      <h2>API Demo - Posts</h2>

      <table border="1">

        <thead>

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Comments</th>
          </tr>

        </thead>

        <tbody>

          {posts.map((post) => (

            <tr key={post.id}>

              <td>{post.id}</td>

              <td>{post.title}</td>

              <td>{post.body}</td>

              <td>{post.comment_count}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default ApiDemo