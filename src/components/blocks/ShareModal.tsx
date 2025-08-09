import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type ShareModalProps = {
  postId: string
  onClose: () => void
}

const ShareModal: React.FC<ShareModalProps> = ({ postId, onClose }) => {
  const [shareMessage, setShareMessage] = useState('')
  const postUrl = `${window.location.origin}/post/${postId}`
  const isShareSupported = typeof navigator.share === 'function'

  useEffect(() => {
    setShareMessage(`Check out this thot: ${postUrl}`)
  }, [postUrl])

  const handleModalShare = async () => {
    if (!navigator.share) return

    try {
      await navigator.share({
        title: 'Check out this post',
        text: shareMessage,
        url: postUrl,
      })
      onClose()
    } catch (err) {
      console.error('Sharing failed:', err)
      toast.error('Sharing failed. Please try again.')
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(postUrl)
      toast.success('Link copied to clipboard!')
    } catch (err) {
      toast.error('Failed to copy link: ' + err)
    }
  }
  

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div
        className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 lg:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl  mb-4 text-brand font-jockey">Share this thot</h2>

        {isShareSupported ? (
          <>
            <label htmlFor="share-message" className="block mb-2 text-secondary text-sm">
              Customize your message:
            </label>
            <textarea
              id="share-message"
              className="w-full border border-input focus:border-brand focus:outline-none transition-colors duration-300 rounded p-2 mb-4 text-secondary"
              rows={4}
              value={shareMessage}
              onChange={(e) => setShareMessage(e.target.value)}
            />
            <div className='flex flex-row'>
                <button
                onClick={handleModalShare}
                className="bg-brand text-primary px-4 py-2 rounded mr-2 hover:bg-opacity-80 w-full"
                >
                Share
                </button>
                <button
                onClick={onClose}
                className="px-4 py-2 rounded border hover:bg-gray-100 w-full"
                >
                Cancel
                </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 text-secondary">
              Sharing is not supported on your browser. You can copy the link below:
            </p>
            <input
              type="text"
              readOnly
              value={postUrl}
              className="w-full border border-input focus:border-brand focus:outline-none transition-colors duration-300 rounded p-2 mb-4 text-secondary"
              onFocus={(e) => e.currentTarget.select()}
            />
            <div className='flex flex-row'>
                <button
                onClick={copyToClipboard}
                className="bg-accent text-white px-4 py-2 rounded mr-2 hover:opacity-80 w-full"
                >
                Copy Link
                </button>
                <button
                onClick={onClose}
                className="px-4 py-2 rounded border hover:bg-gray-100 w-full"
                >
                Close
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ShareModal
