import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'WinkyPie — Pro photos. No photographer.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          background:
            'linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 50%, #0e0e0e 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(236,72,153,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(245,158,11,0.35) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 18px',
            borderRadius: 9999,
            background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
            color: '#fff',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1.4,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          iOS · AI photo studio
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            fontSize: 100,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <span>Pro photos.</span>
          <span
            style={{
              background:
                'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            No photographer.
          </span>
        </div>

        <div
          style={{
            marginTop: 32,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 28,
            fontFamily: 'Helvetica, Arial, sans-serif',
            maxWidth: 800,
          }}
        >
          One selfie. Pro poses from our collection. AI does the rest.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 96,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: 'rgba(255,255,255,0.55)',
            fontSize: 22,
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
          }}
        >
          winkypie.app
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
