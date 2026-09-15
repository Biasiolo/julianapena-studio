import React, { useId } from 'react';
export const mediaUrl = (file) => `${import.meta.env.BASE_URL}media/${file}`;
export default function Media({ file, alt, crop, size = [768,1152], position = 'center', className = '', priority = false }) {
  const id = useId();
  if (crop) return <svg className={`media ${className}`} viewBox={crop.join(' ')} preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby={id}><title id={id}>{alt}</title><image href={mediaUrl(file)} width={size[0]} height={size[1]} /></svg>;
  return <img className={`media ${className}`} src={mediaUrl(file)} alt={alt} style={{ objectPosition: position }} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />;
}
