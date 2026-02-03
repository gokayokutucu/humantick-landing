export function DecorativeFooter() {
  return (
    <div className="relative h-8 overflow-hidden">
      {/* Top layer - dark blue bars */}
      <div className="absolute inset-0 flex gap-4">
        <div className="h-4 bg-blue-900" style={{ width: '80px' }} />
        <div className="h-4 bg-blue-900" style={{ width: '120px', marginLeft: '120px' }} />
        <div className="h-4 bg-cyan-300" style={{ width: '200px', marginLeft: '100px' }} />
        <div className="h-4 bg-cyan-300" style={{ width: '100px', marginLeft: '80px' }} />
        <div className="h-4 bg-cyan-500" style={{ width: '150px', marginLeft: '60px' }} />
        <div className="h-4 bg-blue-900" style={{ width: '100px', marginLeft: '40px' }} />
      </div>

      {/* Bottom layer - lighter blue bars */}
      <div className="absolute bottom-0 inset-x-0 flex gap-4">
        <div className="h-4 bg-blue-900" style={{ width: '60px', marginLeft: '40px' }} />
        <div className="h-4 bg-cyan-400" style={{ width: '140px', marginLeft: '180px' }} />
        <div className="h-4 bg-cyan-300" style={{ width: '90px', marginLeft: '120px' }} />
        <div className="h-4 bg-cyan-600" style={{ width: '120px', marginLeft: '140px' }} />
        <div className="h-4 bg-cyan-400" style={{ width: '180px', marginLeft: '80px' }} />
        <div className="h-4 bg-blue-900" style={{ width: '90px', marginLeft: '20px' }} />
      </div>
    </div>
  );
}
