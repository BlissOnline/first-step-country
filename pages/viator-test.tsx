// pages/viator-test.tsx
import { FC } from 'react'

const ViatorTest: FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Viator Raw Snippet Test</h1>
    <div
      data-vi-partner-id="P00249582"
      data-vi-widget-ref="W-a20062da-1abc-4955-ad7c-99b01db43901"
    ></div>
    <script
      async
      src="https://www.viator.com/orion/partner/widget.js"
    ></script>
  </div>
)

export default ViatorTest
