import { fetchPosts } from '@/services'
import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostsState {
  loading: boolean
  error: string | null
  posts: Post[]
  getPosts: () => Promise<void>
}

const postsStore: StateCreator<PostsState> = (set) => ({
  loading: false,
  error: null,
  posts: [],
  getPosts: async () => {
    set({ loading: true })
    await fetchPosts()
      .then((res) => set({ posts: res.data, loading: false, error: null }))
      .catch((error) => {
        set({ posts: [], error: error.message, loading: false })
        console.log('error', error)
      })
  },
})

export const usePostsStore = create<PostsState>()(devtools(postsStore))
