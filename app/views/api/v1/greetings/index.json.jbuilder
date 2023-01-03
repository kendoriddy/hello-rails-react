@greeting ||= OpenStruct.new(name: "Hello, World!")
json.text @greeting.name