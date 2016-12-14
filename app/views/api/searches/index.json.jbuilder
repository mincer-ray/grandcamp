@results.each do |key, result|
  json.set! key do
    json.type result[:type]
    json.id result[:id]
    json.name result[:name]
    json.pic asset_path(result[:pic].url(:thumb))
  end
end
